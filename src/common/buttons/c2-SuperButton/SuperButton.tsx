import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    return (
        <button
            className={className}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{restProps.children}
        </button>
    )
}

export default SuperButton
