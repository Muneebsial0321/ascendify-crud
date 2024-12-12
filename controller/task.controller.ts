// import task from '../types/task.type'
import { Request, Response } from 'express'
import Task from '../models/task.model'
import { AuthRequst } from '../types/authReq.interface'

const create = async (req: any, res: Response) => {
    try {
        const userId= req.user._id
        const task = new Task({userId,...req.body})
        await task.save()
        res.json(task)
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

const getOne = async (req: Request, res: Response) => {
    try {
        
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

const getAll = async (req: Request, res: Response) :Promise<any>=> {
    try {
        const task = await Task.find({})
        res.json(task)
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

const patch = async (req: Request, res: Response) => {
    try {
                //  to-do 
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

const put = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{ new: true })
        res.json({message:"Deleted SuccessFully"})
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

const remove = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.json({message:"Deleted SuccessFully"})
    } catch (error) {
        console.log({ error })
        res.status(500).json({ error: "internal Server error" })
    }
}

export { create, getOne, getAll, patch, put, remove }