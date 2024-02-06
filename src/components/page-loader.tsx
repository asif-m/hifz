import { createEffect } from "solid-js";
import { IPageData } from "~/models/page";
import { useStore } from "~/store/store";

export default function PageLoader(props: { page: number }) {

    createEffect(() => {
        const { setPageData, pageData } = useStore();
        if (props.page === 0) {
            return;
        }

        if (pageData()[props.page]) {
            return;
        }

        import(`../../public/page/${props.page}.json`)
            .then((res) => setPageData((prev) => ({ ...prev, [props.page]: res.default as IPageData })))
            .catch((e) => console.error(e));

    }, [props.page])
    return null;
}