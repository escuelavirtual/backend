const AnswerService = require('../services/answerService');
const Answer = require('../models/answer');

class answerController{

    static async listAll(req,res){
       try{
        const answers = await AnswerService.findAllAnswer()
        return res.status(200).json({ok:true,answers})
       }catch(err){
        return res.status(500).json({ ok: false, err });
       }
    }
    static async createAnswer(req,res){
        try{
            const answers = await AnswerService.createAnswer(req.body)
            return res.status(200).json({ok:true,message:'Created Sucessfull',data:answers})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    static async getAnswer(req,res){
        try{
            const {id} = req.params
            const answers = await AnswerService.searchAnswer(id)
            return res.status(200).json({ok:true,data:answers})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    static async getAnswerOfQuestion(req,res){
        try{
            const {question_id} = req.params
            const answerQuestion = await AnswerService.getAnswerOfQuestion(question_id)
            return res.status(200).json({ok:true,data:answerQuestion})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    static async updateAnswer(req,res){
        try{
            const {id} = req.params
            const answerQuestion = await AnswerService.UpdateAnswer(req.body,id)
            return res.status(200).json({ok:true,message:'Update Sucessfull',data:answerQuestion})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    //delete course ...
    static async deleteAnswer (req,res){
        try{
            const {id} = req.params
            const answerQuestion =  await AnswerService.deleteAnswerQuestion(id)
            return res.status(200).json(answerQuestion)
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }

}
module.exports = answerController


