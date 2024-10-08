import { Certificate } from "@prisma/client";
import {create} from "zustand"



export type ModalType = "createCert" | 'updateCert'


interface ModalData {
    Certificate?: Certificate
}

interface ModelStore {
    type: ModalType | null;
    data: ModalData
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}


export const useModal = create<ModelStore>((set) => ({
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({type, isOpen: true, data}),
    onClose: () => set({type: null, isOpen: false})
}))