import {create} from 'zustand'
import jwtDecode from "jwt-decode"
import {persist,createJSONStorage} from 'zustand/middleware'

const useAuthStore = create(
    persist(
        (set) => ({
            token: null,
            usuario: null, 
            setToken: (token) => {
                const {usuario} = jwtDecode(token);

                set({token, usuario});
            },
            setUsuario: (usuario) => set({usuario}),            
        }),
        {
            name: "auth",
        }
    )
)

export default useAuthStore;