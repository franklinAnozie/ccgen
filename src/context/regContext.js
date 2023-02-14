import { useContext, createContext, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [regInput, setRegInput] = useState({})
    const [greenClass, setGreenClass] = useState('')
    const [suppliedDetails, setSuppliedDetails] = useState({})
    const enabler = useRef(null)
    const username = useRef(regInput.username)
    const email = useRef(regInput.email)
    const fullname = useRef(regInput.fullname)
    const policy = useRef(null)

    const navigate = useNavigate()
    let { id } = useParams()

    const URI = 'https://63e6b2e283c0e85a8698302a.mockapi.io/api/v1/creditcards'

    const dataPost = async(url, data) => {
        try {
            const response = await axios.post(url, data)
            return response.data
        } catch (error) {
            console.log('An Error Occured: ', error)
        }
    }

    const buttonEnabler = () => {
        policy.current.checked
        ? username.current.value === '' || fullname.current.value === '' || email.current.value === '' || greenClass.color === 'red'
        ? enabler.current.disabled = true
        : enabler.current.disabled = false 
        : enabler.current.disabled = true
    }

    const loginUser = (e) => {
        e.preventDefault()
        const fetchData = async () => {
            const response = await axios.get('https://63e6b2e283c0e85a8698302a.mockapi.io/api/v1/creditcards')
            const data = response.data
            const neededData = data.map(item => {
                return {
                    username: item.username,
                    password: item.password,
                    id: item.id
                }
            })
            const foundData = (neededData.find(
                data => (data.username === suppliedDetails.username
                && data.password === suppliedDetails.password)));

            if (foundData) {
                id = foundData.id
                navigate(`dashboard/${id}`)
            } else {
                alert("User Not Found")
            }
        }
        fetchData()
    }

    const comparePassword = (e) => {
        return e.target.value === regInput.password
        ? setGreenClass({color: 'green', confirmation: 'correct'}) : setGreenClass({color: 'red', confirmation: 'error'});
    }

    const regUser = (e) => {
        e.preventDefault();
        alert("Proceed to Login!")
        const data = {
            fullname: regInput.fullname,
            username: regInput.username,
            email: regInput.email,
            password: regInput.password,
        }
        dataPost(URI, data);
    }

    return <AppContext.Provider value={{
        regInput,
        setRegInput,
        greenClass,
        setGreenClass,
        suppliedDetails,
        setSuppliedDetails,
        id,
        loginUser,
        buttonEnabler,
        comparePassword,
        regUser,
        enabler,
        username,
        email,
        fullname,
        policy,
        URI
    }}>
    {children}
    </AppContext.Provider>
}

export const useRegContext = () => {
    return useContext(AppContext)
}