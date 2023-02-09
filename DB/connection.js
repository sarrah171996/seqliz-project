import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('sequalizedb', "root", '', {
    host: 'localhost',
    dialect: 'mysql'
});

export const connectDB = async() => {

 return await sequelize.sync({alter:false}).then (result=>{
    console.log(`DB connected successfully .....`);

}).catch (err =>{
    console.log(`fail to  connect ...... ${err}`);
})

}


