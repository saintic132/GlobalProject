import SuperInputText from "../../../common/buttons/c1-SuperInputText/SuperInputText"
import SuperCheckbox
    from "../../../common/buttons/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../common/buttons/c2-SuperButton/SuperButton";

export const Login = () => {
    return (
        <div>
            <form>
                <SuperInputText />
                <SuperInputText />
                <SuperCheckbox />
                <SuperButton />
            </form>
        </div>
    )
};