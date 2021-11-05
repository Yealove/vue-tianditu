import { watch } from "vue-demi";
import { Props } from "../types";

export function useWatch({ props, instance }: { props: Props; instance: T.TileLayer.TDT }) {
  watch(
    () => props.opacity,
    val => val && instance.setOpacity(val)
  );
  watch(
    () => props.zIndex,
    val => val && instance.setZIndex(val)
  );
  watch(
    () => props.url,
    val => val && instance.setUrl(val)
  );
}
