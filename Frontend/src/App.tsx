import { FC } from "react";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import Router from "./apps/shared/routes/AppRouter";

const FIVE_SECONDS_IN_MS = 5000;

type AppProps = object;

const App: FC<AppProps> = () => {
  return (
    <SnackbarProvider preventDuplicate autoHideDuration={FIVE_SECONDS_IN_MS}>
      <RouterProvider router={Router} />
    </SnackbarProvider>
  );
};

export default App;

// type UserProps = {
//   id: number;
//   name_user: string;
//   cellphone: number;
// };

// <RouterProvider router={AppRoutes}>

//     <Auth />

// </RouterProvider>

// const App: FC<AppProps> = () => {
//   const [counter, setCounter] = useState<number>(0);
//   const [users, setUsers] = useState<Array<User>>([]);

//   const fetchBackendData = async () => {
//     // URL = http://localhost:5000/api/usuarios
//     const url = `${
//       import.meta.env.VITE_BACKEND_URL
//     }api/usuarios/consultar-usuarios`;

//     const response = await fetch(url, {
//       method: "GET",
//     });

//     const data = await response.json();
//     console.log("Módulo de usuarios", data);

//     const { users } = data;

//     setUsers(users);
//   };

//   const handleDecrement: () => void = () => {
//     setCounter(counter - 1);
//   };
//   const handleIncrement: () => void = () => {
//     setCounter(counter + 1);
//   };

//   return (
//     <main className="flex flex-col gap-y-4 p-6">
//       <h1 className="text-2xl text-red-500">¡Hola Mundo!</h1>
//       <div className="flex items-center gap-x-4">
//         <button onClick={handleDecrement}>-</button>
//         <span>{counter}</span>
//         <button onClick={handleIncrement}>+</button>
//         <span>Backend url: {import.meta.env.VITE_BACKEND_URL}</span>
//       </div>
//       <div>
//         <button onClick={fetchBackendData}>Conectar con backend</button>
//       </div>
//       {users && users.length > 0 && (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.id} - {user.name_user} - {user.cellphone}
//             </li>
//           ))}
//         </ul>
//       )}
//       {!users || (users.length == 0 && <span>No hay usuarios</span>)}
//     </main>
//   );
// };

// export default App;
