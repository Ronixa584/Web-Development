import React from 'react'

export const Tastimonials = () => {
  return (
    <section class="px-4 pt-10 mt-6">
      <div class="mx-auto max-w-3xl text-center mb-24">
        <h3 class="mb-6 text-3xl font-bold text-white pt-6">Testimonials</h3>
      </div>

      <div class="grid gap-12 text-center md:grid-cols-2">
        <div class="mb-6 md:mb-0 rounded-sm hover:shadow-[0px_5px_48px_0px_#edf2f7]">
          <div class="mb-6 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT66YzPBBllf4q7gXVoiRDGHhP90viEyPDK-ThuPFRz22C-X-IYuPl783FhRtcBDdv9n90&usqp=CAU"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 hover:text-white dark:text-neutral-300 ">
            "I've always believed that football is not just a game; it's a way
            of life. This website captures the essence of the beautiful game,
            providing fans with a unique and immersive experience. The latest
            updates, live scores, and in-depth analyses make it a go-to
            destination for football enthusiasts."
          </p>
          <p class="italic text-white">- Lionel Messi</p>
        </div>

        <div class="mb-0 hover:shadow-[0px_5px_48px_0px_#edf2f7]">
          <div class="mb-6 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCUxV4cVfyeEJFJ80CEw-4mo3Izy8D6ITyQ&usqp=CAU"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300 hover:text-white">
            "Football is more than a sport; it's a global phenomenon that
            connects people worldwide. This website is a testament to the
            passion and dedication that fans have for the game. The detailed
            statistics, engaging content, and user-friendly interface make it
            stand out in the digital football landscape. Whether you're a
            seasoned supporter or a casual fan, this site provides everything
            you need to stay connected with the world of football."
          </p>
          <p class="italic text-white">- Cristiano Ronaldo</p>
        </div>

        <div class="mb-0 hover:shadow-[0px_5px_48px_0px_#edf2f7]">
          <div class="mb-6 flex justify-center">
            <img
              src="data:image/jpeg;base64,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"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300 hover:text-white">
            "Football is a dynamic and ever-evolving sport, and this website
            captures the essence of its constant motion. The tactical insights,
            match analyses, and real-time updates provide an invaluable resource
            for both fans and aspiring tacticians. As a manager, I appreciate
            platforms that enhance the understanding of the game, and this
            website does just that."
          </p>
          <p class="italic text-white">- Pep Guardiola</p>
        </div>

        <div class="mb-0 hover:shadow-[0px_5px_48px_0px_#edf2f7]">
          <div class="mb-6 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMHWp9MwjZvh2-dKUFY6QnQ2rEDGsEu_QwZfBZX9g-l3tb3wGZNkegaie2J2xPzwC33Q&usqp=CAU"
              class="w-24 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <p class="my-4 text-xl text-neutral-500 dark:text-neutral-300 hover:text-white">
            "Over the years, I've witnessed the incredible growth and global
            impact of football. This website encapsulates the spirit of the
            game, offering a comprehensive and user-friendly experience. From
            historical moments to current fixtures, it serves as a reliable hub
            for football enthusiasts. The dedication to providing accurate
            information and engaging content makes it a valuable platform for
            fans of all ages."
          </p>
          <p class="italic text-white">- Sir Alex Ferguson</p>
        </div>
      </div>
    </section>
  );
}

