import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
    res.send('home no controller para testes.')
    //res.render('pages/pages)
}

export const dogs = (req: Request, res: Response) => {
    //res.render('pages/pages)
}

export const cats = (req: Request, res: Response) => {
    //res.render('pages/pages)
}

export const fishes = (req: Request, res: Response) => {
    //res.render('pages/pages)
}