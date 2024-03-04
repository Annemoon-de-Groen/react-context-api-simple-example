import { useContext } from "react"
import { PostContext } from "../App"

export default function Header() {
    const {appName} = useContext(PostContext)
    return <h1>{ appName }</h1>
}
