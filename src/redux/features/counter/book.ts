import { useAppDispatch, useAppSelector } from "@/redux/hooks"






export function Counter() {
 
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()


}