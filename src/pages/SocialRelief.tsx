import Card from "../components/ui/Card";
import InfoBanner from "../components/ui/InfoBanner";

export default function SocialRelief() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-teal-700 mb-10">
        Relief Work & Social Services
      </h1>
      <p className="text-lg mb-8 text-center">
        Our community is committed to supporting those in need, both locally and
        globally. Our relief efforts include:
      </p>
      <ol className="list-none max-w-3xl mx-auto my-8 space-y-6">
        {[
          {
            title: "Rohingya Crisis Support",
            description:
              "We've organized fundraising campaigns for flood victims to aid Rohingya refugees.",
          },
          {
            title: "Palestine Refugee Support",
            description:
              "Ongoing efforts to fundraise aid for Palestinian refugees.",
          },
        ].map((item, index) => (
          <Card key={index} title={item.title}>
            <p className="text-gray-600">{item.description}</p>
          </Card>
        ))}
      </ol>
      <InfoBanner
        description="We believe in the power of community action and welcome volunteers to
        join our efforts."
      />
    </div>
  );
}
