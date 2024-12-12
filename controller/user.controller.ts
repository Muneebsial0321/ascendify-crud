import User from '../models/user.model'
// import user from '../types/user.type'
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const signup = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body)
        await user.save()
        const authToken = jwtTokenFactory(String(user._id))
        res.status(200).json({ authToken })
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }

}
const login = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const authToken = jwtTokenFactory(String(user._id))
            if (user?.password == password) return res.status(200).json({authToken})
            res.status(401).json({ message: "invalid credentials" })
        }

    } catch (error) {
        res.status(500).json({ error: "internal Server error" })
    }

}
const getAll = async (req: Request, res: Response) => {
    try {
        const user = await User.find({})
        res.status(200).json(user)
    } catch (error) {
        console.log({error})
        res.status(500).json({ error: "internal Server error" })
    }

}

const jwtTokenFactory = (payload: string): string => {
    const token = jwt.sign({ _id: payload }, process.env.SECRET_KEY || "zulu xray")
    return token
}

export { login, getAll, signup }