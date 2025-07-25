import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Column } from "react-table";
import { useSelector } from "react-redux";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { Skeleton } from "../../components/loader";
import { useAllOrdersQuery, useUpdateOrderMutation } from "../../redux/api/orderAPI";
import { RootState } from "../../redux/store";
import { CustomError } from "../../types/api-types";

type DataType = {
  _id: string;
  user: string;
  amount: number;
  status: JSX.Element;
  items: JSX.Element;
  action: JSX.Element;
};

const columns: Column<DataType>[] = [
  { Header: "Order ID", accessor: "_id" },
  { Header: "Customer", accessor: "user" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Status", accessor: "status" },
  { Header: "Items", accessor: "items" },
  { Header: "Action", accessor: "action" },
];

const AdminOrders = () => {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { data, isLoading, isError, error } = useAllOrdersQuery(user?._id!);
  const [updateOrder] = useUpdateOrderMutation();

  const [rows, setRows] = useState<DataType[]>([]);

  useEffect(() => {
    if (isError) {
      const err = error as CustomError;
      toast.error(err.data.message);
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setRows(
        data.orders.map((order) => ({
          _id: order._id,
          user: typeof order.user === "object" && "name" in order.user
            ? order.user.name
            : "Unknown",
          amount: order.total,
          status: (
            <span
              className={
                order.status === "Processing"
                  ? "red"
                  : order.status === "Shipped"
                  ? "orange"
                  : "green"
              }
            >
              {order.status}
            </span>
          ),
          items: (
            <ul>
              {order.orderItems.map((item, index) => (
                <li key={index}>
                  {item.name} x {item.quantity}
                </li>
              ))}
            </ul>
          ),
          action: (
            <button
              disabled={order.status === "Delivered"}
              className="btn"
              onClick={() =>
                updateOrder({ userId: user?._id!, orderId: order._id })
                  .unwrap()
                  .then((res) => toast.success(res.message))
                  .catch((err) => toast.error(err.data.message))
              }
            >
              {order.status === "Processing"
                ? "Mark as Shipped"
                : order.status === "Shipped"
                ? "Mark as Delivered"
                : "Completed"}
            </button>
          ),
        }))
      );
    }
  }, [data, updateOrder, user?._id]);

  const Table = TableHOC<DataType>(
    columns,
    rows,
    "admin-order-box",
    "All Orders",
    rows.length > 6
  )();

  return (
    <div className="admin-container">
      <AdminSidebar />
      <main>
        <h1>All Orders</h1>
        {isLoading ? <Skeleton length={10} /> : Table}
      </main>
    </div>
  );
};

export default AdminOrders;
