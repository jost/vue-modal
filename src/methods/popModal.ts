import getCurrentModal from "./getCurrentModal";

/**
 * @description Try to close the last opened modal window.
 * */
export default function popModal(containerId:string=''):Promise<void>{
    const modal = getCurrentModal(containerId);
    if (!modal) return Promise.resolve();
    return modal.close();
}