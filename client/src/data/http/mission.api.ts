import { AxiosWrapper } from "./axios/axios-wrapper";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Axios, { AxiosResponse, CancelTokenSource } from "axios";
import Mission from "core/entity/mission";
import moment from "moment";

export default class MissionApiProvider {
  private axiosWrapper: AxiosWrapper;
  constructor() {
    this.axiosWrapper = new AxiosWrapper();
  }

  async postMisson(mission: Mission): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .post(process.env.REACT_APP_HOST + "/missions", mission);
    } catch (error) {
      throw error;
    }
  }

  async GetTodayMisson(
    date: string,
    memberId: string,
    CancelTokenSource?: CancelTokenSource
  ): Promise<AxiosResponse> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .get(
          process.env.REACT_APP_HOST +
            "/missions?writer=" +
            memberId +
            "&after=" +
            date,
          {
            cancelToken: CancelTokenSource?.token,
          }
        );
    } catch (error) {
      if (Axios.isCancel(error)) throw new Error("요청 취소");
      throw error;
    }
  }

  async updateMission(missionId: number, mission: Mission): Promise<any> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .put(process.env.REACT_APP_HOST + "/missions/" + missionId, mission);
    } catch (error) {}
  }

  async startMission(missionId: number): Promise<any> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .put(
          process.env.REACT_APP_HOST + "/missions/" + missionId + "/progress",
          { time: moment().toISOString() }
        );
    } catch (error) {}
  }

  async pauseMission(missionId: number): Promise<any> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .put(process.env.REACT_APP_HOST + "/missions/" + missionId + "/pause", {
          time: moment().toISOString(),
        });
    } catch (error) {}
  }

  async completeMission(missionId: number): Promise<any> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .put(
          process.env.REACT_APP_HOST + "/missions/" + missionId + "/complete",
          { time: moment().toISOString() }
        );
    } catch (error) {}
  }

  async removeMission(missionId: number): Promise<any> {
    try {
      return await this.axiosWrapper
        .getAxios()
        .delete(process.env.REACT_APP_HOST + "/missions/" + missionId);
    } catch (error) {}
  }

  async postResult(
    missionId: number,
    result: string,
    CancelTokenSource?: CancelTokenSource
  ) {
    try {
      return await this.axiosWrapper
        .getAxiosWithPlainText()
        .put(
          process.env.REACT_APP_HOST + "/missions/" + missionId + "/result",
          result,
          {
            cancelToken: CancelTokenSource?.token,
          }
        );
    } catch (error) {
      if (Axios.isCancel(error)) throw new Error("요청 취소");
      throw error;
    }
  }
}
