package com.myboard.springboard;

import com.myboard.springboard.answer.Answer;
import com.myboard.springboard.question.Question;
import com.myboard.springboard.question.QuestionRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class SpringBoardApplicationTests {

    @Autowired
    private QuestionRepository questionRepository;

//    @Autowired
//    private AnswerRepository answerRepository;

    @Transactional
    @Test
    void testJpa() {
//        Question q1 = new Question();
//        q1.setSubject("sbb가 무엇인가요?");
//        q1.setContent("sbb에 대해서 알고 싶습니다.");
//        q1.setCreateDate(LocalDateTime.now());
//        this.questionRepository.save(q1);
//
//        Question q2 = new Question();
//        q2.setSubject("스프링 부트 모델 질문입니다.");
//        q2.setContent("id는 자동으로 생성되나요?");
//        q2.setCreateDate(LocalDateTime.now());
//        this.questionRepository.save(q2);

        // 조회
//        List<Question> all = this.questionRepository.findAll();
//        assertEquals(2, all.size());
//
//        Question q = all.get(0);
//        assertEquals("sbb가 무엇인가요?", q.getSubject());

        // 특정값 조회
//        Optional<Question> oq = this.questionRepository.findById(1);
//        if(oq.isPresent()) {
//            Question q = oq.get();
//            assertEquals("sbb가 무엇인가요?", q.getSubject());
//        }
//        Question q = this.questionRepository.findBySubject("sbb가 무엇인가요?");
//        assertEquals(1, q.getId());

//        Question q = this.questionRepository.findBySubjectAndContent("sbb가 무엇인가요?", "sbb에 대해서 알고 싶습니다.");
//        assertEquals(1, q.getId());

//        List<Question> qList = this.questionRepository.findBySubjectLike("sbb%");
//        Question q = qList.get(0);
//        assertEquals("sbb가 무엇인가요?", q.getSubject());

        // 수정
//        Optional<Question> oq = this.questionRepository.findById(1);
//        assertTrue(oq.isPresent());
//        Question q = oq.get();
//        q.setSubject("수정된 제목");
//        this.questionRepository.save(q);

        // 삭제
//        assertEquals(2, this.questionRepository.count());
//        Optional<Question> oq = this.questionRepository.findById(1);
//        assertTrue(oq.isPresent());
//        Question q = oq.get();
//        this.questionRepository.delete(q);
//        assertEquals(1, this.questionRepository.count());

        // 저장하기
//        Optional<Question> oq = this.questionRepository.findById(2);
//        assertTrue(oq.isPresent());
//        Question q = oq.get();
//
//        Answer a = new Answer();
//        a.setContent("네 자동으로 생성됩니다.");
//        a.setQuestion(q);
//        a.setCreateDate(LocalDateTime.now());
//        this.answerRepository.save(a);

    // 답변 조회
//        Optional<Answer> oa = this.answerRepository.findById(1);
//        assertTrue(oa.isPresent());
//        Answer a = oa.get();
//        assertEquals(2, a.getQuestion().getId());

        // 답변 데이터 -> 질문 데이터 찾기 & 질문 -> 답변 데이터 찾기
        Optional<Question> oq = this.questionRepository.findById(2);
        assertTrue(oq.isPresent());
        Question q = oq.get();

        List<Answer> answerList = q.getAnswerList();

        assertEquals(1, answerList.size());
        assertEquals("네 자동으로 생성됩니다.", answerList.get(0).getContent());
    }

}
