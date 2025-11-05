import type { StackItem } from "../assets/Data/MyStacks.ts";
import WindowBorder from "./WindowBorder.tsx";

interface IterateStacksProps {
  StackDescription?: string;
  StackTitle: string;
  StackData: StackItem[];
}

const IterateStacks = ({
  StackDescription,
  StackTitle,
  StackData,
}: IterateStacksProps) => {
  return (
    <WindowBorder title={StackTitle}>
      <div>
        {StackDescription
          ? (
            <h2 className="font-bold text-center text-lg mb-4">
              {StackDescription}
            </h2>
          )
          : (
            ""
          )}
        <ul>
          {StackData.map((stackItem) => {
            return (
              <li>
                <span className="font-bold">{stackItem.Key} : </span>
                {stackItem.Value.map((value, index) => {
                  return (
                    <span>
                      {value}
                      {index === stackItem.Value.length - 1 ? "." : ", "}
                    </span>
                  );
                })}
              </li>
            );
          })}
        </ul>
      </div>
    </WindowBorder>
  );
};

export default IterateStacks;
