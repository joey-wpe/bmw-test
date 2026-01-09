"use client";

import type { AcfFaq } from "@/__generated__/graphql";
import blockConfig from "./config";

export function AcfFaq(props: AcfFaq) {
  const { blockFaq } = props;

  if (!blockFaq?.faq || blockFaq.faq.length === 0) {
    return null;
  }

  const { faq } = blockFaq;

  // Generate anchor ID from question
  const generateAnchorId = (question: string): string => {
    return question
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphabet characters (keep spaces and hyphens)
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
  };

  const scrollToAnswer = (anchorId: string) => {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left Column - Questions Only (Plain Text) - Sticky on desktop */}
          <div className="lg:sticky lg:top-14 lg:self-start">
            <div className="h-full space-y-4 bg-stone-900 p-4">
              <div className="h-full space-y-4 bg-stone-850 p-4 pb-6">
                {faq.map((item, index) => {
                  const question = item?.question || "";
                  if (!question) return null;

                  const anchorId = generateAnchorId(question);

                  return (
                    <button
                      key={`question-${index}`}
                      onClick={() => scrollToAnswer(anchorId)}
                      className="block w-full cursor-pointer text-left text-sm font-bold text-white transition-colors hover:text-gray-400"
                    >
                      <span className="font-bold">{index + 1}. </span>
                      {question}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Questions with Answers */}
          <div className="space-y-3">
            {faq.map((item, index) => {
              const question = item?.question || "";
              const answer = item?.answer || "";
              if (!question || !answer) return null;

              const anchorId = generateAnchorId(question);

              return (
                <div
                  key={`answer-${index}`}
                  id={anchorId}
                  className="scroll-mt-15"
                >
                  {/* Question Header */}
                  <h6 className="font-bold text-white">
                    <span className="mr-1">{index + 1}.</span>
                    {question}
                  </h6>

                  {/* Answer Content */}
                  <div
                    className="wysiwyg font-light"
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

AcfFaq.displayName = blockConfig.displayName;
AcfFaq.fragments = blockConfig.fragment;
