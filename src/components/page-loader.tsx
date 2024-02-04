import { createEffect } from "solid-js";
import { IPageDate } from "~/models/page";
import { useStore } from "~/store/store";

export default function PageLoader(props: { page: number }) {

    createEffect(() => {
        const { setPageData } = useStore();
        if (props.page === 0) {
            return;
        }

        import(`../../public/page/${props.page}.json`)
            .then((res) => {
                setPageData(() => res.default as IPageDate)
                return res.default
            })
            .catch((e) => {
                console.error(e);
            });

    }, [props.page])
    return null;
}