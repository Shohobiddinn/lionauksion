
export function useLogin() {
    // import { useStore } from "~/store/store";
    // const store = useStore()

    const username = ref("");
    const password = ref("");
    const baseUrl = useRuntimeConfig().public.baseUrl;
    const data = ref(null)
    async function loginApi() {
        const data = await fetch(baseUrl + "/login", {
            method: "POST",
            body: new URLSearchParams({
                username: username.value,
                password: password.value,
            }),
        });
        const res = await data.json();
        // console.log(res.accessToken);
        localStorage.setItem("userToken", res.accessToken);
        console.log("userToken", res.accessToken);

        // if (res) {
        //     console.log("hello");
        //     router.push("/");
        //     localStorage.setItem("userToken", res.accessToken);
        //     localStorage.setItem("userId", res.user.id);
        //     localStorage.setItem("role", res?.user?.roles?.[0]?.name);
        //     if (res?.user?.supplierId !== null) {
        //         localStorage.setItem("userSupplierId", res?.user?.supplierId);
        //     } else {
        //         localStorage.setItem("userSupplierId", "");
        //     }
        //     if (res?.user?.companyId !== null) {
        //         localStorage.setItem("userCompanyId", res?.user?.companyId);
        //     } else {
        //         localStorage.setItem("userCompanyId", "");
        //     }
        //     toast.success(data?.message || "Success", {
        //         position: "top-right",
        //         timeout: 2000,
        //         closeOnClick: true,
        //         pauseOnFocusLoss: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         draggablePercent: 0.6,
        //         showCloseButtonOnHover: false,
        //         hideProgressBar: true,
        //         closeButton: "button",
        //         icon: true,
        //         rtl: false,
        //     });
        // } else {
        //     router.push("/login");
        //     store.loader = false;
        //     console.log(data);
        //     toast.error(res.message ||
        //         "Error",
        //         {
        //             position: "top-right",
        //             timeout: 2000,
        //             closeOnClick: true,
        //             pauseOnFocusLoss: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             draggablePercent: 0.6,
        //             showCloseButtonOnHover: false,
        //             hideProgressBar: true,
        //             closeButton: "button",
        //             icon: true,
        //             rtl: false,
        //         }
        //     );
        // }

    }
    return { username, password, loginApi, data }
}