/*
 * @Descripttion: 路由
 * @Author: BZR
 * @Date: 2022-08-26 10:05:35
 * @LastEditTime: 2022-09-14 11:11:40
 */
import { Application } from 'egg';
import Mongo from './utils/mongo';

export default (app: Application) => {
  const { controller, router } = app;
  let mongo;
  !mongo && new Mongo();
  router.get('/', controller.home.index);
  router.get('/project/template', controller.project.index);
  router.post('/upload', controller.upload.index);
};
