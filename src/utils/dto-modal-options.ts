import {ModalOptions} from "./Modal";
import {configuration} from "./config";

export default function DtoModalOptions(options: Partial<ModalOptions>): ModalOptions {
	const output: ModalOptions = {
		backgroundClose: configuration.backgroundClose,
		isRoute: false,
		containerId: ''
	};

	if (options.backgroundClose !== undefined)
		output.backgroundClose = options.backgroundClose;

	if (options.isRoute) output.isRoute = options.isRoute;

	if (options.containerId) output.containerId = options.containerId;

	return output;
}
