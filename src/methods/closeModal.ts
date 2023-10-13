import {runGuardQueue} from "../utils/guards";
import {modalQueue} from "../utils/state";
import Modal from "../utils/Modal";

/**
 * @description Try to close all modals windows. Throw error if some modal has onClose hook with returned false value.
 * */
export default function closeModal(containerId:string=''):Promise<void>{
    return runGuardQueue(modalQueue.value
        // this filter clause ensures that only modals are closed that are in the indicated container
        // this is useful for closing all modals in one instance when there are multiple instances on the same page.
        .filter(m => !containerId || !m.containerId || (m.containerId === containerId))
        .map((modalObject:Modal) => () => modalObject.close()))
}
