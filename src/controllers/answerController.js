const AnswerService = require('../services/answerService');

class answerController{

    static async listAll(req,res){
       try{
        const allanswers = await AnswerService.findAllAnswer()
        return res.status(200).json({ok:true,allanswers})
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
    static async getAnswerQuestion(req,res){
        try{
            const {question_id} = req.params
            const getanswer = await AnswerService.getAnswerQuestion(question_id)
            return res.status(200).json({ok:true,data:getanswer})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    static async updateAnswer(req,res){
        try{
            const {id} = req.params
            const updateanswer = await AnswerService.updateAnswer(req.body,id)
            return res.status(200).json({ok:true,message:'Update Sucessfull',data:updateanswer})
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }
    //delete course ...
    static async deleteAnswer (req,res){
        try{
            const {id} = req.params
            const deleteanswer =  await AnswerService.deleteAnswerQuestion(id)
            return res.status(200).json(deleteanswer)
        }catch(err){
            return res.status(500).json({ ok: false, err });
        }
    }

}
module.exports = answerController


