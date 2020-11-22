/*
 * @Author: zenghao
 * @Date: 2020-07-28 14:34:03
 * @LastEditTime: 2020-08-11 16:17:21
 * @LastEditors: zenghao
 * @Description: 
 * @FilePath: /easy-table/src/components/service.js
 * @Copyright 2020 OBKoro1
 */
import { request } from './request'
import { queryCache } from 'react-query'

const uriMap = {
  getDataList: '',
  insertItem: '',
  updateItem: '',
  removeItem: '',
  getTableHeder: ''
}

const setUri = props => {
  for (let key in uriMap) {
    uriMap[key] = props[key]
  }
}

// 获取表格列表
const getDataList = body => request(uriMap.getDataList, body)

// 新增
const insertItem = body => request(uriMap.insertItem, body)

// 删除
const removeItem = body => request(uriMap.removeItem, body)

// 更新
const updateItem = body => request(uriMap.updateItem, body)

export {
  getDataList,
  insertItem,
  updateItem,
  removeItem,
  setUri
}