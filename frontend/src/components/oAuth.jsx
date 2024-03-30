import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase'
import { useDispatch } from 'react-redux'
import { signInSuccess } from '../redux/user/userSlice.js'
import { useNavigate } from 'react-router-dom'
import { URL } from '../assets/url.js'

export default function OAuth() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleGoogleClick = async () => {
        try{
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            const res = await fetch(`${URL}/auth/google`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            dispatch(signInSuccess(data))
            navigate('/')
        }catch (error) {
            console.log('Could not login with Google', error)
        }
    }

    return (
        <button type="button" onClick={handleGoogleClick} className="bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95">Continue with Google</button>
    )
}