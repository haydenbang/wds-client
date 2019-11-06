import { take, put, call } from "redux-saga/effects";
import { cloneableGenerator } from "@redux-saga/testing-utils";
import { getUsers } from "../sagas/Users";
import { UserTypes, getUserList } from "../../actions";
import * as api from ".././api";
import * as actions from "../../actions";

describe("User Saga", () => {
  const gen = cloneableGenerator(getUsers)(); //복사가 가능한 제너레이터 객체 생성

  const users = [
    {
      address: "서울",
      create_date: 1573025631000,
      del_yn: null,
      expired_date: null,
      id: "test2019",
      idx: 1,
      logout_date: null,
      modify_date: 1573025631000,
      name: "김터디",
      nick_name: "컴맨",
      pass: "test",
      photo: null,
      tel: "01012341234",
      token: null
    },
    {
      address: "서울",
      create_date: 1573025633000,
      del_yn: null,
      expired_date: null,
      id: "test2019",
      idx: 2,
      logout_date: null,
      modify_date: 1573025633000,
      name: "김터디",
      nick_name: "컴맨",
      pass: "test",
      photo: null,
      tel: "01012341234",
      token: null
    },
    {
      address: "서울",
      create_date: 1573025636000,
      del_yn: null,
      expired_date: null,
      id: "test2019",
      idx: 3,
      logout_date: null,
      modify_date: 1573025636000,
      name: "김터디",
      nick_name: "컴맨",
      pass: "test",
      photo: null,
      tel: "01012341234",
      token: null
    }
  ];

  expect(gen.next().value).toEqual(call(api.getUsers));
  const result = call(api.getUsers);
  it("유저리스트(getUsers)api 호출 성공", () => {
    const gen1 = gen.clone();
    expect(gen1.next(Promise.resolve()).value).toEqual(
      put({
        type: UserTypes.GET_USERS_SUCCESS,
        payload: users
      })
    );
  });

  // import { expectSaga } from "redux-saga-test-plan";
  // import * as api from "../../api";
  // import { getUsers } from "../../sagas/Users";
  // import * as actions from "../../actions";
  // import { take, put, call } from "redux-saga/effects";
  // import { UserTypes, getUserList } from "../../actions";

  // it("it fetches userList, 유저리스트 api 호출 성공", () => {
  //   const users = [
  //     {
  //       address: "서울",
  //       create_date: 1573025631000,
  //       del_yn: null,
  //       expired_date: null,
  //       id: "test2019",
  //       idx: 1,
  //       logout_date: null,
  //       modify_date: 1573025631000,
  //       name: "김터디",
  //       nick_name: "컴맨",
  //       pass: "test",
  //       photo: null,
  //       tel: "01012341234",
  //       token: null
  //     },
  //     {
  //       address: "서울",
  //       create_date: 1573025633000,
  //       del_yn: null,
  //       expired_date: null,
  //       id: "test2019",
  //       idx: 2,
  //       logout_date: null,
  //       modify_date: 1573025633000,
  //       name: "김터디",
  //       nick_name: "컴맨",
  //       pass: "test",
  //       photo: null,
  //       tel: "01012341234",
  //       token: null
  //     },
  //     {
  //       address: "서울",
  //       create_date: 1573025636000,
  //       del_yn: null,
  //       expired_date: null,
  //       id: "test2019",
  //       idx: 3,
  //       logout_date: null,
  //       modify_date: 1573025636000,
  //       name: "김터디",
  //       nick_name: "컴맨",
  //       pass: "test",
  //       photo: null,
  //       tel: "01012341234",
  //       token: null
  //     }
  //   ];
  //   return expectSaga(getUsers)
  //     .provide([[call(api.getUsers), users]])
  //     .put({
  //       type: UserTypes.GET_USERS_SUCCESS,
  //       payload: users
  //     })
  //     .run();
});
