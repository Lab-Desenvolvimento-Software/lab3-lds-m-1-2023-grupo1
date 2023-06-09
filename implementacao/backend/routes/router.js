const router = require("express").Router();

// Aluno router
const alunoRouter = require("./alunoRouter");
const carteiraRouter = require("./carteiraRouter");
const instituicaoEnsinoRouter = require("./instituicaoEnsinoRouter");
const professorRouter = require("./professorRouter");
const empresaRouter = require("./empresaRouter");
const pessoaRouter = require("./pessoaRouter");
const vantagemRouter = require("./vantagemRouter");
const loginRouter = require("./loginRouter");

router.use("/", alunoRouter);
router.use("/", carteiraRouter);
router.use("/", instituicaoEnsinoRouter);
router.use("/", professorRouter);
router.use("/", empresaRouter);
router.use("/", pessoaRouter);
router.use("/", vantagemRouter);
router.use("/", loginRouter);

module.exports = router;
