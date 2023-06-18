document.addEventListener("DOMContentLoaded", function() {
  var currentQuestionIndex = 0;
  var nextQuestionBtn = document.getElementById("nextQuestionBtn");
  var questionElement = document.getElementById("question");
  var optionsFieldset = document.getElementById("options");
  var answerForm = document.getElementById("answerForm");
  var answersList = document.getElementById("answersList");
  var answers = [];

  var questions = [
    {
      options: ["Иногда я предоставляю возможность другим взять на себя ответственность за решение спорного вопроса.",
      "Чем обсуждать то, в чем мы расходимся, я стараюсь обратить внимание на то, с чем мы оба не согласны."]
    },
    {
      options: ["Я стараюсь найти компромиссное решение.",
      "Я пытаюсь уладить дело, учитывая интересы другого и мои."]
    },
    {
      options: ["Обычно я настойчиво стремлюсь добиться своего.",
      "Я стараюсь успокоить другого и сохранить наши отношения."]
    },
    {
      options: ["Я стараюсь найти компромиссное решение.",
      "Иногда я жертвую своими собственными интересами ради интересов другого человека. "]
    },
    {
      options: ["Улаживая спорную ситуацию, я все время стараюсь найти поддержку у другого.",
      "Я стараюсь сделать все, чтобы избежать напряженности."]
    },
    {
      options: ["Я пытаюсь избежать возникновения неприятностей для себя.",
      "Я стараюсь добиться своего."]
    },
    {
      options: ["Я стараюсь отложить решение спорного вопроса с тем, чтобы со временем решить его окончательно.",
      "Я считаю возможным уступить, чтобы добиться другого."]
    },
    {
      options: ["Обычно я настойчиво стремлюсь добиться своего.",
      "Я первым делом стараюсь ясно определить то, в чем состоят все затронутые интересы и вопросы."]
    },
    {
      options: ["Думаю, что не всегда стоит волноваться из-за каких-то возникающих разногласий.",
      "Я предпринимаю усилия, чтобы добиться своего."]
    },
    {
      options: ["Я твердо стремлюсь достичь своего.",
      "Я пытаюсь найти компромиссное решение."]
    },
    {
      options: ["Первым делом я стараюсь ясно определить то, в чем состоят все затронутые интересы и вопросы.",
      "Я стараюсь успокоить другого и главным образом сохранить наши отношения."]
    },
    {
      options: ["Зачастую я избегаю занимать позицию, которая может вызвать споры.",
      "Я даю возможность другому в чем-то остаться при своем мнении, если он также идет мне навстречу."]
    },
    {
      options: ["Я предлагаю среднюю позицию.",
      "Я настаиваю, чтобы было сделано по-моему."]
    },
    {
      options: ["Я сообщаю другому свою точку зрения и спрашиваю о его взглядах.",
      "Я пытаюсь показать другому логику и преимущества моих взглядов."]
    },
    {
      options: ["Я стараюсь успокоить другого и, главным образом, сохранить наши отношения.",
      "Я стараюсь сделать все необходимое, чтобы избежать напряженности."]
    },
    {
      options: ["Я стараюсь не задеть чувств другого.",
      "Я пытаюсь убедить другого в преимуществах моей позиции."]
    },
    {
      options: ["Обычно я настойчиво стараюсь добиться своего.",
      "Я стараюсь сделать все, чтобы избежать бесполезной напряженности."]
    },
    {
      options: ["Если это сделает другого счастливым, я дам ему возможность настоять на своем.",
      "Я даю возможность другому в чем-то остаться при своем мнении, если он также идет мне навстречу."]
    },
    {
      options: ["Первым делом я стараюсь ясно определить то, в чем состоят все затронутые интересы и спорные вопросы.",
      "Я стараюсь отложить решение спорного вопроса с тем, чтобы со временем решить его окончательно."]
    },
    {
      options: ["Я пытаюсь немедленно преодолеть наши разногласия.",
      "Я стремлюсь к лучшему сочетанию выгод и потерь для всех."]
    },
    {
      options: ["Ведя переговоры, я стараюсь быть внимательным к желаниям другого.",
      "Я всегда склоняюсь к прямому обсуждению проблемы."]
    },
    {
      options: ["Я пытаюсь найти позицию, которая находится посредине между моей позицией и точкой зрения другого человека.",
      "Я отстаиваю свои желания."]
    },
    {
      options: ["Я озабочен тем, чтобы удовлетворить желания каждого.",
      "Иногда я представляю возможность другим взять на себя ответственность за решение спорного вопроса."]
    },
    {
      options: ["Если позиция другого кажется ему очень важной, я постараюсь пойти навстречу его желаниям.",
      "Я стараюсь убедить другого прийти к компромиссу."]
    },
    {
      options: ["Я пытаюсь доказать другому логику и преимущества моих взглядов.",
      "Ведя переговоры, я стараюсь быть внимательным к желаниям другого."]
    },
    {
      options: ["Я предлагаю среднюю позицию.",
      "Я почти всегда озабочен тем, чтобы удовлетворить желания каждого из нас."]
    },
    {
      options: ["Я избегаю позиции, которая может вызвать споры.",
      "Если это сделает другого счастливым, я дам ему возможность настоять на своем."]
    },
    {
      options: ["Обычно я настойчиво стремлюсь добиться своего.",
      "	Улаживая ситуацию, я стараюсь найти поддержку у другого."]
    },
    {
      options: ["Я предлагаю среднюю позицию.",
      "	Думаю, что не всегда стоит волноваться из-за каких-то возникающих разногласий"]
    },
    {
      options: ["Я стараюсь не задеть чувств другого.",
      "Я всегда занимаю такую позицию в спорном вопросе, чтобы мы с другим заинтересованным человеком могли добиться успеха."]
    }
  ];

  var totalQuestions = questions.length;

  function getNextQuestion() {
    if (currentQuestionIndex < totalQuestions) {
      var question = questions[currentQuestionIndex];
      showQuestion(question);
      currentQuestionIndex++;
      updateQuestionCounter();
      updateButtonLabel();
    }
  }

  function showQuestion(question) {
    questionElement.textContent = question.question;

    // Очищаем варианты ответов
    optionsFieldset.innerHTML = "";

    // Создаем радио-кнопки для вариантов ответов
    question.options.forEach(function(option, index) {
      var label = document.createElement("label");
      var radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "answer";
      radio.value = index.toString();

      label.appendChild(radio);
      label.appendChild(document.createTextNode(option));

      optionsFieldset.appendChild(label);
    });

    // Включаем поле с вариантами ответов
    optionsFieldset.disabled = false;
  }

  function updateQuestionCounter() {
    var questionCounter = document.getElementById("questionCounter");
    questionCounter.textContent = (currentQuestionIndex + 0) + " из " + totalQuestions;
  }

  function updateButtonLabel() {
    if (currentQuestionIndex === totalQuestions - 0) {
      nextQuestionBtn.textContent = "Результат";
    } else {
      nextQuestionBtn.textContent = "Далее";
    }
  }

  nextQuestionBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
      var answer = selectedOption.value;
      answers.push(answer);
    }

    if (currentQuestionIndex === totalQuestions) {
      localStorage.setItem("answers", JSON.stringify(answers));
      window.location.href = "results.html";
    } else {
      getNextQuestion();
    }
  });

  getNextQuestion();
});