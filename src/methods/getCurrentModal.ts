import {modalQueue} from "../utils/state";
/**
 * @return {Modal} Last opened modal in active status. Return undefined if there is not opened modal.
 * */
export default function getCurrentModal(containerId:string='') {
	if (containerId) {
		// if a containerId is passed, we close the lates on the stack (queue) that has the correct id.
		// this enables closing/popping the expected modal with multiple instances on the same page.
		if (modalQueue.value
			.filter(m => !m.containerId || (m.containerId === containerId))
			.length === 0) return undefined;

		const indexToPop = () => {
			for(let i = modalQueue.value.length - 1; i >= 0; i--){
				if(modalQueue.value[i].containerId === containerId)
					return i;
			}
			return -1;
		};
		return  modalQueue.value[indexToPop()];
	} else {
		if (modalQueue.value.length === 0) return undefined;
		return  modalQueue.value[modalQueue.value.length - 1];
	}
}