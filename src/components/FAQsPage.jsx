const FAQsPage = () => {
   return (
      <div className='my-10 space-y-2'>
         <h2 className='font-semibold text-4xl mb-10 text-center'>
            Got Questions? We Have Answers!
         </h2>
         <div className='collapse collapse-plus bg-base-200 rounded-sm'>
            <input type='radio' name='faqs' defaultChecked />
            <div className='collapse-title text-xl font-medium'>
               What is Chill Gamer?
            </div>
            <div className='collapse-content'>
               <p>
                  Chill Gamer is a game review platform where users can explore
                  and share reviews of their favorite games. It helps you
                  discover new games and provides honest opinions from fellow
                  gamers.
               </p>
            </div>
         </div>
         <div className='collapse collapse-plus bg-base-200 rounded-sm'>
            <input type='radio' name='faqs' />
            <div className='collapse-title text-xl font-medium'>
               How do I submit a game review?
            </div>
            <div className='collapse-content'>
               <p>
                  To submit a review, simply sign up or log in to your account.
                  Once you're logged in, navigate to the game’s page and click
                  the "Submit a Review" button to share your thoughts and
                  rating.
               </p>
            </div>
         </div>
         <div className='collapse collapse-plus bg-base-200 rounded-sm'>
            <input type='radio' name='faqs' />
            <div className='collapse-title text-xl font-medium'>
               Do I need to create an account to read game reviews?
            </div>
            <div className='collapse-content'>
               <p>
                  No, you can read all the reviews without an account. However,
                  you will need to create an account to submit your own reviews
                  or interact with other users.
               </p>
            </div>
         </div>
         <div className='collapse collapse-plus bg-base-200 rounded-sm'>
            <input type='radio' name='faqs' />
            <div className='collapse-title text-xl font-medium'>
               Can I edit or delete my review?
            </div>
            <div className='collapse-content'>
               <p>
                  Yes, you can edit or delete your review anytime by visiting
                  the review section of the game you reviewed. Make sure you're
                  logged in with the account used to submit the review.
               </p>
            </div>
         </div>
         <div className='collapse collapse-plus bg-base-200 rounded-sm'>
            <input type='radio' name='faqs' />
            <div className='collapse-title text-xl font-medium'>
               Is Chill Gamer free to use?
            </div>
            <div className='collapse-content'>
               <p>
                  Yes, Chill Gamer is completely free to use! You can read
                  reviews, submit feedback, and explore games without any cost.
               </p>
            </div>
         </div>
      </div>
   );
};

export default FAQsPage;
