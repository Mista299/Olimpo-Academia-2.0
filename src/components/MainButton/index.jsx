const MainButton = ({name}) => {
    return(
        <li>
            <a href="#"
            className="relative text-sm text-white group">
                {name}
            <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#61CE70] transition-all duration-300 group-hover:w-full"
            ></span>
            </a>
        </li>
    )

}
export default MainButton