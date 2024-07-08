import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
    // private boards = [];    // 로컬 메모리에 1차 저장
    private boards: Board[] = []; // 배열이 여러개가 들어가야 하기 때문에 모델도 배열 형태로 저장
    getAllBoards(): Board[] {
        return this.boards; // 위의 배열에 대한 모든 값을 함수 호출 시 리턴
    }

    createBoard(title: string, description: string) {
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }
}
