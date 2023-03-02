import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@src/hook'
import { addCount, addCountAsync } from "@store/demo-slice"

const DemosPage: FC = () => {
    const count = useAppSelector((state) => { return state.Demo.count })
    const dispatch = useAppDispatch()
    return (
        <div>
            <p><label>数量:</label>{count}</p>
            <p>
                <button type="button" onClick={() => { dispatch(addCount(1)) }}>+1</button>
                <button type="button" onClick={() => { dispatch(addCount(-1)) }}>-1</button>
            </p>
            <p>
                <button type="button" onClick={() => { dispatch(addCountAsync({ count: 1 })) }}>延时+1</button>
            </p>
        </div>
    )
}

export default DemosPage