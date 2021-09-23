import { MakeFailure, MakeMessage, MakeSuccess } from '../../../components/utils/Dialog/presentation/WarningDialog'

export const closeWarning = () => ({
    type: "SET_WARNING",
    payload:  null
})

export const showFailure = (message, description, title, done) => ({
    type: "SET_WARNING",
    payload: MakeFailure(message, description, title, done)
})

export const showSuccess = (message, description, title, done) => ({
    type: "SET_WARNING",
    payload: MakeSuccess(message, description, title, done)
})

export const showMessage = (message, title) => ({
    type: "SET_WARNING",
    payload: MakeMessage(message, title)
})

