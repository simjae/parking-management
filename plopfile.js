module.exports = function (plop) {
  // component gen 컴포넌트 생성기
  plop.setGenerator("component", {
    description: "Create a component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "컨포넌트명",
      },
      {
        type: "input",
        name: "path",
        message: "생성할 디렉토리",
        default: "common/components", // 기본 경로 설정
      },
    ],
    actions: [
      {
        type: "add",
        path: "app/{{path}}/{{pascalCase name}}/{{pascalCase name}}.view.tsx",
        templateFile: "plop-templates/components/Component.view.tsx.hbs",
      },
      {
        type: "add",
        path: "app/{{path}}/{{pascalCase name}}/{{pascalCase name}}.interface.ts",
        templateFile: "plop-templates/components/Component.interface.ts.hbs",
      },
      {
        type: "add",
        path: "app/{{path}}/{{pascalCase name}}/{{pascalCase name}}.impl.tsx",
        templateFile: "plop-templates/components/Component.impl.tsx.hbs",
      },
      {
        type: "add",
        path: "app/{{path}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/components/index.ts.hbs",
      },
    ],
  });
};
