import axios from "axios";
import { FormData, ObjectColor } from "../interfaces";

export async function getNotes() {
  const res = await axios.get(`${process.env.REACT_APP_API_URL}/`);
  return res.data;
}

export async function createNote(body: FormData) {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/`, body);
  return res.data;
}

export async function deleteNote(id: number) {
  const res = await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`);
  return res.data;
}

export async function setFavorite(id: number) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/favorite/${id}`);
  return res.data;
}

export async function editColor(body: ObjectColor, id: number) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/color/${id}`, body);
  return res.data;
}

export async function editContent(body: FormData, id: number) {
  const res = await axios.put(`${process.env.REACT_APP_API_URL}/content/${id}`, body);
  return res.data;
}
