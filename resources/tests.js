var numberOfItemsToAdd = 100;
var Suites = [];

Suites.push({
  name: "Angular 1.5.3",
  url: "todomvc/angularjs-perf/index.html",
  version: "1.5.3",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement("#new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var submitEvent = document.createEvent("Event");
        submitEvent.initEvent("submit", true, true);
        newTodo.form.dispatchEvent(submitEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "React 15.0.2",
  url: "todomvc/react/index.html",
  version: "15.0.2",
  prepare: function(runner, contentWindow, contentDocument) {
    contentWindow.Utils.store = function() {};
    return runner.waitForElement(".new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var keydownEvent = document.createEvent("Event");
        keydownEvent.initEvent("keydown", true, true);
        keydownEvent.keyCode = 13; // VK_ENTER
        newTodo.dispatchEvent(keydownEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "Elm 0.17",
  url: "todomvc/elm17/index.html",
  version: "0.17",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement("#new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var keydownEvent = document.createEvent("Event");
        keydownEvent.initEvent("keydown", true, true);
        keydownEvent.keyCode = 13; // VK_ENTER
        newTodo.dispatchEvent(keydownEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "Vue",
  url: "todomvc/vue/index.html",
  version: "1.0.24",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement(".new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var app = contentWindow.app;
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        // failed // app.newTodo = 'Something to do ' + i;
        newTodo.dispatchEvent(inputEvent);

        var keyupEvent = document.createEvent("Event");
        keyupEvent.initEvent("keyup", true, true);
        keyupEvent.keyCode = 13; // VK_ENTER
        app.newTodo = "Something to do " + i;
        newTodo.dispatchEvent(keyupEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "Mithril",
  url: "todomvc/mithril/index.html",
  version: "0.1.0",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement("#new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var keydownEvent = document.createEvent("Event");
        keydownEvent.initEvent("keypress", true, true);
        keydownEvent.keyCode = 13; // VK_ENTER
        newTodo.dispatchEvent(keydownEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "Preact",
  url: "todomvc/preact/index.html",
  version: "8.1.0",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement("#new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var keydownEvent = document.createEvent("Event");
        keydownEvent.initEvent("keydown", true, true);
        keydownEvent.keyCode = keydownEvent.which = 13; // VK_ENTER
        newTodo.dispatchEvent(keydownEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});

Suites.push({
  name: "Vanilla",
  url: "todomvc/vanilla-es6/index.html",
  version: "0.0.0",
  prepare: function(runner, contentWindow, contentDocument) {
    return runner.waitForElement(".new-todo").then(function(element) {
      element.focus();
      return element;
    });
  },
  tests: [
    new BenchmarkTestStep("Adding" + numberOfItemsToAdd + "Items", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      for (var i = 0; i < numberOfItemsToAdd; i++) {
        var inputEvent = document.createEvent("Event");
        inputEvent.initEvent("input", true, true);
        newTodo.value = "Something to do " + i;
        newTodo.dispatchEvent(inputEvent);

        var changeEvent = document.createEvent("Event");
        changeEvent.initEvent("change", true, true);
        newTodo.dispatchEvent(changeEvent);
      }
    }),
    new BenchmarkTestStep("CompletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var checkboxes = contentDocument.querySelectorAll(".toggle");
      for (var i = 0; i < checkboxes.length; i++) checkboxes[i].click();
    }),
    new BenchmarkTestStep("DeletingAllItems", function(
      newTodo,
      contentWindow,
      contentDocument
    ) {
      var deleteButtons = contentDocument.querySelectorAll(".destroy");
      for (var i = 0; i < deleteButtons.length; i++) deleteButtons[i].click();
    })
  ]
});
