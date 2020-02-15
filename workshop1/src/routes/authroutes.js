import SignIn from '../views/authentication/Signin';
import SignUp from '../views/authentication/Signup';

var authRoutes = [
    { path: '/signin', name: 'signin', component: SignIn },
    { path: '/signup', name: 'signup', component: SignUp }
]

export default authRoutes;