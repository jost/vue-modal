<script>
import WidgetContainerModalItem from "./WidgetModalContainerItem.vue";
import initialize from "../utils/initialize";
import {h, onMounted, TransitionGroup} from "vue";
import {modalQueue} from "../utils/state";
import {configuration} from "../utils/config";

export default {
  setup(props) {

    onMounted(initialize)

    return () => {
      return h(TransitionGroup, {name: configuration.animation}, {
        default: () => modalQueue.value
            // this filter clause ensures this modal is only opened in the container it belongs to
            // when there are multiple instances on the same page.
            .filter(m => !m.containerId || (m.containerId === props.containerId))
            .map(modalObject => {
              return h(WidgetContainerModalItem, {
                key: modalObject.id,
                id: modalObject.id,
              });
            })
      })
    }
  },
  components: {WidgetContainerModalItem},
  props: {
    containerId: {
      type: String,
      default: ''
    }
  },

}
</script>

<style>
.modal-list-enter-active,
.modal-list-leave-active,
.modal-list-enter-active .modal-item,
.modal-list-leave-active .modal-item {
  transition: all 0.2s ease;
}

.modal-list-enter-from,
.modal-list-leave-to {
  opacity: 0 !important;
}

.modal-list-enter-from .modal-item,
.modal-list-leave-to .modal-item {
  transform: translateY(-60px);
}
</style>
