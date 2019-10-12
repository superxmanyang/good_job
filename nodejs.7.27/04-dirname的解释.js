import { dirname } from "path";

/**
 *  在nodejs里面，有一个  单词，其实是一个属性
 * 
 *  可以快速的获取当前js文件的真实目录 - 绝对路径
 *  
 *  dir == directory - 目录
 *  name == 名字
 *    __dirname
 */
console.log(__dirname);

// __dirname意思就是不用在cd切换那个盘下面在去node