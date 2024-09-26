import axios from 'axios';

export const API_SERVER_HOST = "http://localhost:8080";

const prefix = `${API_SERVER_HOST}/api/todos`;

// 특정 번호의 todo를 조회
export const getOne = async (tno) => {
    try {
        const res = await axios.get(`${prefix}/${tno}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// todo 전체 조회
export const getList = async (pageParam) => {
    const { page, size } = pageParam;
    
    const res = await axios.get(`${prefix}/list`, {
        params: {
            page: page,
            size: size
        }
    });
    
    return res.data;
};

// todo 등록
export const postAdd = async (todoObj) => {
    const res = await axios.post(`${prefix}`, todoObj);
    return res.data;
}