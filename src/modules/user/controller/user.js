import userModel from "../../../../DB/model/User.model.js"
import productModel from "../../../../DB/model/poduct.model.js";
import { Op } from "sequelize";




export const getAllUsers = async (req, res, next) => {
    const users = await userModel.findAll({})
    return res.json({ msg: "done", users })
};


export const getAllUsersWithPro = async (req, res, next) => {
    const users = await userModel.findAll({
        include: productModel

    })
    return res.json({ msg: "done", users })
};

export const getUsersByID = async (req, res, next) => {
    const { id } = req.query
    const users = await userModel.findAll({
        where: {
            id
        }
    })
    return res.json({ msg: "done", users })
};



export const searchByChar = async (req, res, next) => {
    const { searhChar, searchAge } = req.query
    const users = await userModel.findAll({
        where: {
            userName: {

                [Op.like]: `${searhChar}%`

            },
            age: {
                [Op.lt]: searchAge
            }
        }
    })
    return res.json({ msg: "done", users })
};

export const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { age, userName, email, password } = req.body
    console.log(id, age);
    const users = await userModel.update(req.body, {
        where: {
            id
        }
    });
    return users[0] ? res.json({ message: "Done", users }) : res.json({ message: 'in-valid data' })


};


export const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const users = await userModel.destroy({
        where: {
            id
        }
    });
    return res.json({ message: 'user deleted' })


};




