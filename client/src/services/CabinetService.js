import Api from '@/services/Api'

export default {
    index(search) {
        return Api().get('cabinets')
    },
    show(cabinetId) {
        return Api().get('cabinet/' + cabinetId)
    },
    post(cabinet) {
        return Api().post('cabinet', cabinet)
    },
    put(cabinet) {
        return Api().put('cabinet/' + cabinet.id, cabinet)
    },
    delete(cabinet) {
        return Api().delete('cabinet/' + cabinet.id, cabinet)
    },
}