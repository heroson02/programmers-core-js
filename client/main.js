import { tiger, getNode, insertLast, renderSpinner, renderUserCard, delayP, changeColor } from "./lib/index.js";
const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const userCardinner = getNode('.user-card-inner');

async function renderUserList() {
	renderSpinner(userCardinner);
  try {
    const { data } = await tiger.get(END_POINT);

		await delayP(2000);

		getNode('.loadingSpinner').remove();

    data.forEach(( {name, email} ) => {
			const template = `<article class="user-card" data-index="user-1">
          <h3 class="user-name">${name}</h3>
          <div class="user-resouce-info">
            <div>
              <a class="user-email" href="mailto:tiger@euid.dev">${email}</a>
            </div>
            <div>
              <a class="user-website" href="http://tiger.com" target="_blank" rel="noopener noreferer">tiger.com</a>
            </div>
          </div>
          <button class="delete">삭제</button>
        </article>`;
			insertLast(userCardinner, template);
			// renderUserCard(userCardinner, user);
    });
		changeColor('.user-card');
  } catch {
    console.error('error!');
  }
}

renderUserList();
