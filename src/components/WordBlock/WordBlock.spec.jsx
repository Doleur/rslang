import React from 'react';
import { act } from 'react-dom/test-utils';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { mount } from 'enzyme';
import waitForExpect from 'wait-for-expect';

import * as AuthenticationContext from '../../contexts/AuthenticationContext';
import * as RSLangService from '../../utilities/rslang.service';
import * as S from './styled';
import WordBlock from './WordBlock';

let currentUser;

const callRequestMock = jest.fn().mockResolvedValue({});
const triggerRefetch = jest.fn();

const wordDataMock = {
  _id: '5e9f5ee35eb9e72bc21af4ac',
  audio: 'files/01_0014.mp3',
  audioExample: 'files/01_0014_example.mp3',
  audioMeaning: 'files/01_0014_meaning.mp3',
  group: 0,
  image: 'files/01_0014.jpg',
  page: 0,
  textExample: 'January is the first <b>month</b> of the year.',
  textExampleTranslate: 'январь - первый месяц года',
  textMeaning: 'A <i>month</i> is one of 12 periods of time in one year.',
  textMeaningTranslate: 'Месяц - это один из 12 периодов времени в году',
  transcription: '[mʌnθ]',
  word: 'month',
  wordTranslate: 'месяц',
  userWord: { difficulty: 'none', optional: {} }
};

const componentMount = async ({ wordDataOveride, pageType }) => {
  const wrapper = mount(
    <WordBlock
      wordData={{ ...wordDataMock, ...wordDataOveride }}
      triggerRefetch={triggerRefetch}
      pageType={pageType}
    />
  );

  await waitForUpdate(wrapper);

  return wrapper;
};

const waitForUpdate = async (component) => {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    component.update();
  });
};

describe('<WordBlock />', () => {
  beforeEach(() => {
    jest
      .spyOn(AuthenticationContext, 'useAuthentication')
      .mockImplementation(() => ({ currentUser }));
    jest
      .spyOn(RSLangService, 'createUserWord')
      .mockImplementation(callRequestMock);
    jest
      .spyOn(RSLangService, 'updateUserWord')
      .mockImplementation(callRequestMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('User is not logged in', () => {
    beforeEach(() => {
      currentUser = undefined;
    });

    it('renders right components', async () => {
      const component = await componentMount({ pageType: 'general' });

      const word = component.find(S.WordDescription).find(S.Word);

      expect(component.find(S.WordImage)).toHaveLength(1);
      expect(word.text()).toContain(wordDataMock.word);
      expect(word.text()).toContain(wordDataMock.transcription);
      expect(word.text()).toContain(wordDataMock.wordTranslate);
      expect(word.find(VolumeUpIcon)).toHaveLength(1);
      expect(component.find(S.TextMeaning).text()).toContain(
        wordDataMock.textMeaning.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextMeaning).text()).toContain(
        wordDataMock.textMeaningTranslate.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextExample).text()).toContain(
        wordDataMock.textExample.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextExample).text()).toContain(
        wordDataMock.textExampleTranslate.replace(/<[^>]+>/g, '')
      );
    });

    describe('General page', () => {
      it('does not render user actions', async () => {
        const component = await componentMount({ pageType: 'general' });

        expect(component.find(S.UserActions)).toHaveLength(0);
      });
    });

    describe('Deleted words page', () => {
      it('does not render user actions', async () => {
        const component = await componentMount({ pageType: 'deleted' });

        expect(component.find(S.UserActions)).toHaveLength(0);
      });
    });

    describe('Difficult words page', () => {
      it('does not render user actions', async () => {
        const component = await componentMount({ pageType: 'difficult' });

        expect(component.find(S.UserActions)).toHaveLength(0);
      });
    });
  });

  describe('User is logged in', () => {
    beforeEach(() => {
      currentUser = { userId: 1, token: 'token' };
    });

    it('renders right components', async () => {
      const component = await componentMount({ pageType: 'general' });

      const word = component.find(S.WordDescription).find(S.Word);

      expect(component.find(S.WordImage)).toHaveLength(1);
      expect(word.text()).toContain(wordDataMock.word);
      expect(word.text()).toContain(wordDataMock.transcription);
      expect(word.text()).toContain(wordDataMock.wordTranslate);
      expect(word.find(VolumeUpIcon)).toHaveLength(1);
      expect(component.find(S.TextMeaning).text()).toContain(
        wordDataMock.textMeaning.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextMeaning).text()).toContain(
        wordDataMock.textMeaningTranslate.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextExample).text()).toContain(
        wordDataMock.textExample.replace(/<[^>]+>/g, '')
      );
      expect(component.find(S.TextExample).text()).toContain(
        wordDataMock.textExampleTranslate.replace(/<[^>]+>/g, '')
      );
    });

    describe('General page', () => {
      it('renders user actions', async () => {
        const component = await componentMount({ pageType: 'general' });

        expect(component.find(S.UserActions)).toHaveLength(1);

        const actionButtons = component
          .find(S.UserActions)
          .find(S.UserActionButton);

        expect(actionButtons).toHaveLength(2);
        expect(actionButtons.at(0).text()).toBe('Сложное');
        expect(actionButtons.at(1).text()).toBe('Удалить');
      });

      it('marks word as difficult', async () => {
        const component = await componentMount({ pageType: 'general' });

        act(() => {
          component
            .find(S.UserActions)
            .find(S.UserActionButton)
            .at(0)
            .simulate('click');
        });

        await waitForExpect(() => {
          expect(callRequestMock).toHaveBeenCalledTimes(1);
          expect(callRequestMock).toHaveBeenCalledWith({
            userId: 1,
            token: 'token',
            wordId: wordDataMock._id,
            params: { difficulty: 'hard' }
          });
          expect(triggerRefetch).toHaveBeenCalledTimes(1);
        });
      });

      it('Delete word from the dictionary', async () => {
        const component = await componentMount({ pageType: 'general' });

        act(() => {
          component
            .find(S.UserActions)
            .find(S.UserActionButton)
            .at(1)
            .simulate('click');
        });

        await waitForExpect(() => {
          expect(callRequestMock).toHaveBeenCalledTimes(1);
          expect(callRequestMock).toHaveBeenCalledWith({
            userId: 1,
            token: 'token',
            wordId: wordDataMock._id,
            params: { optional: { deleted: true } }
          });
          expect(triggerRefetch).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('Deleted words page', () => {
      it('renders user actions', async () => {
        const component = await componentMount({ pageType: 'deleted' });

        expect(component.find(S.UserActions)).toHaveLength(1);

        const actionButtons = component
          .find(S.UserActions)
          .find(S.UserActionButton);

        expect(actionButtons).toHaveLength(1);
        expect(actionButtons.at(0).text()).toBe('Востановить');
      });

      it('restores word from the deleted words', async () => {
        const component = await componentMount({ pageType: 'deleted' });

        act(() => {
          component
            .find(S.UserActions)
            .find(S.UserActionButton)
            .at(0)
            .simulate('click');
        });

        await waitForExpect(() => {
          expect(callRequestMock).toHaveBeenCalledTimes(1);
          expect(callRequestMock).toHaveBeenCalledWith({
            userId: 1,
            token: 'token',
            wordId: wordDataMock._id,
            params: { optional: {} }
          });
          expect(triggerRefetch).toHaveBeenCalledTimes(1);
        });
      });
    });

    describe('Difficult words page', () => {
      it('renders user actions', async () => {
        const component = await componentMount({ pageType: 'difficult' });

        expect(component.find(S.UserActions)).toHaveLength(1);

        const actionButtons = component
          .find(S.UserActions)
          .find(S.UserActionButton);

        expect(actionButtons).toHaveLength(1);
        expect(actionButtons.at(0).text()).toBe('Убрать из сложных слов');
      });

      it('unmarks word as difficult', async () => {
        const component = await componentMount({ pageType: 'difficult' });

        act(() => {
          component
            .find(S.UserActions)
            .find(S.UserActionButton)
            .at(0)
            .simulate('click');
        });

        await waitForExpect(() => {
          expect(callRequestMock).toHaveBeenCalledTimes(1);
          expect(callRequestMock).toHaveBeenCalledWith({
            userId: 1,
            token: 'token',
            wordId: wordDataMock._id,
            params: { difficulty: 'none' }
          });
          expect(triggerRefetch).toHaveBeenCalledTimes(1);
        });
      });
    });
  });
});
