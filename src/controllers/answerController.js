const Answer = require('../models/answer');
const answerCtrl = {};

answerCtrl.listAll = (req, res) => {
        return Answer.findAll()
            .then((data) => {
                console.log('dato', data);
                if (data) {
                    res.json({ ok: true, message: 'query executed correctly', data });
                } else {
                    // res.status(404).json({ ok: false, data });
                    const err = new Error("answer not found!");
                    err.statusCode = 404;
                    throw err;
                }
            })
            .catch((err) => {
                res.status(500).json({ ok: false, err });
            });
    },

    answerCtrl.createAnswer = (req, res) => {
        const answer = {
            code,
            question_id,
            content,
            isTrue,
            score
        } = req.body;
        console.log('req.body ', req.body)
        return Answer.create(answer)
            .then((data) => {
                res.status(200).json({ ok: true, message: 'Create successfully', data: data });
            })
            .catch((err) => {
                res.status(500).json({ ok: false, err });
            });
    },

    answerCtrl.getAnswer = (req, res) => {
        return Answer.findByPk(req.params.id)
            .then((data) => {
                console.log('dato', data);
                if (data) {
                    res.json({ ok: true, message: 'Query executed correctly', data });
                } else {
                    //res.status(404).json({ ok: false, data });
                    const err = new Error("answer not found!");
                    err.statusCode = 404;
                    throw err;
                }
            })
            .catch((err) => {
                res.status(500).json({ ok: false, err });
            });
    },

    answerCtrl.getAnswerOfQuestion = (req, res) => {
        return Answer.findAll({ where: { question_id: req.params.question_id } })
            .then((data) => {
                console.log('dato', data);
                if (data) {
                    res.json({ ok: true, message: 'query executed correctly', data });
                } else {
                    // res.status(404).json({ ok: false, data });
                    const err = new Error("answer not found!");
                    err.statusCode = 404;
                    throw err;
                }
            })
            .catch((err) => {
                res.status(500).json({ ok: false, err });
            });
    },

    answerCtrl.deleteAnswer = (req, res) => {

    },

    answerCtrl.updateAnswer = (req, res) => {
        let id = req.params.id;
        return Answer.findByPk(id)
            .then((data) => {
                console.log('dato', data);
                if (data) {
                    const answer = {
                        id_course,
                        content,
                        isTrue,
                        score
                    } = req.body;
                    return data.update(answer);
                } else {
                    // res.status(404).json({ ok: false, message: 'answer not found', data });
                    const err = new Error("answer not found!");
                    err.statusCode = 404;
                    throw err;
                }
            })
            .then((data) => {
                res.json({ ok: true, message: 'update executed correctly', data });
            })
            .catch((err) => {
                res.status(500).json({ ok: false, err });
            });
    },

    module.exports = answerCtrl;